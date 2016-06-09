import os
import sys
import jinja2

PROJECT_PATH = os.path.abspath(os.path.dirname(__file__))


def new_sketch(sketch_name):

    template_path = os.path.join(PROJECT_PATH, 'templates')
    template_loader = jinja2.FileSystemLoader(searchpath=template_path)
    template_env = jinja2.Environment(loader=template_loader)

    sketch_html_template = template_env.get_template('new_sketch.html')
    sketch_js_template = template_env.get_template('new_sketch.js')

    template_vars = {
        'sketch_name': sketch_name
    }

    new_sketch_dir = os.path.join(PROJECT_PATH, 'sketches/{sketch_name}'.format(sketch_name=sketch_name))
    os.system('mkdir {}'.format(new_sketch_dir))

    new_sketch_html = sketch_html_template.render(template_vars)
    new_sketch_js = sketch_js_template.render(template_vars)

    new_sketch_html_path = os.path.join(new_sketch_dir, '{sketch_name}.html'.format(
        sketch_name=sketch_name
    ))
    new_sketch_js_path = os.path.join(new_sketch_dir, '{sketch_name}.js'.format(
        sketch_name=sketch_name
    ))

    with open(new_sketch_html_path, 'w') as new_sketch_file:
        new_sketch_file.write(new_sketch_html)
    with open(new_sketch_js_path, 'w') as new_sketch_file:
        new_sketch_file.write(new_sketch_js)


if __name__ == '__main__':
    new_sketch(sketch_name=sys.argv[1])
