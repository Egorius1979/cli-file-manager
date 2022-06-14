# File Manager

## Start

`npm run start -- --username=your_username` - for example _npm run start -- --username=Vasya_

## Commands

- `up` - go upper from current directory;
- `cd path_to_directory` - go to dedicated folder from current directory;
- `ls` - list all files and folder in current directory and print it to console;
- `cat path_to_file` - read file and print its content in console;
- `add new_file_name` - create empty file in current working directory;
- `rn path_to_file new_filename` - rename file;
- `cp path_to_file path_to_new_directory` - copy file;
- `mv path_to_file path_to_new_directory` - move file (same as copy but initial file is deleted);
- `rm path_to_file` - Delete file;
- `os --EOL` - get EOL (default system End-Of-Line);
- `os --cpus` - get host machine CPUs info;
- `os --homedir` - get home directory;
- `os --username` - get current system user name;
- `os --architecture` - get CPU architecture for which Node.js binary has compiled;
- `hash path_to_file` - calculate hash for file and print it into console;
- `compress path_to_file path_to_destination` - compress file (using Brotli algorithm);
- `decompress path_to_file path_to_destination` - decompress file (using Brotli algorithm.

* `Ctrl + C or user sent .exit` - finish the programme

**compress & decompress**: _path_to_destination_ is the path to the directory

- you can enter absolute or relative path in any command provided for working with paths (all with the prefix _path_to_)

- if there are spaces in the names of folders or files, please wrap the entire path in double quotes

**_Good luck!_**
