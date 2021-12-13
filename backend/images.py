
def main():
    print ("Loading images from JS files from AngularJS to DJANGO")

    textToSearch = 'assets'
    textToReplace = 'static/ang/assets'
    from pathlib import Path
    pathlist = Path("config/static/ang").glob('*.js')
    for path in pathlist:
        # because path is object not string
        path_in_str = str(path)
        filename = path_in_str

        with open(filename, "r") as file:
            filedata = file.read()
            # Replace the target string
            filedata = filedata.replace(textToSearch, textToReplace)

        # Write the file out again
        with open(filename, 'w') as file:
            file.write(filedata)
main()