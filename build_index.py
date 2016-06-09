import os
import jinja2

PROJECT_PATH = os.path.abspath(os.path.dirname(__file__))

ALL_INDEX_DIRS = ['sketches']


def build_template(index_dirs, output):

    index_file_path = os.path.join(PROJECT_PATH, output)
    template_path = os.path.join(PROJECT_PATH, 'templates')
    template_loader = jinja2.FileSystemLoader(searchpath=template_path)
    template_env = jinja2.Environment( loader=template_loader)

    index_html_template = template_env.get_template('index.html')

    fileSet = set()
    search_dirs = []
    for d in index_dirs:
        search_dirs.append(os.path.join(PROJECT_PATH, d))

    for rootDir in search_dirs:
        for dir_, _, files in os.walk(rootDir):
            for fileName in files:
                relDir = os.path.relpath(dir_, PROJECT_PATH)
                relFile = os.path.join(relDir, fileName)
                fileSet.add(relFile)

    ordered_files = list(fileSet)
    ordered_files.sort()

    template_vars = {
        'relative_paths': ordered_files
    }

    output_text = index_html_template.render(template_vars)

    with open(index_file_path, 'w') as index_file:
        index_file.write(output_text)


if __name__ == '__main__':
    build_template(index_dirs=ALL_INDEX_DIRS, output='index.html')
