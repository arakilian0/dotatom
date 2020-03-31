# ⚙️ dotatom

**Atom configuration in the root directory of your project.**

## Install
Fire up a console and type:
```
apm install dotatom
```
Or, inside Atom's settings select Install, and then search for this package.

## Usage
###### Step 1.
Here is an example of a typical project structure for Node apps:
```
> your-project
  > node_modules
    package-lock.json
    package.json
    README.md
```
###### Step 2.
Modify your project to include the following:
```
> your-project
  > .atom
      settings.json
  > node_modules
    package-lock.json
    package.json
    README.md
```
###### Step 3.
Here is an example of a valid 'settings.json' file:
```json
{
  "ignore": [
    "node_modules",
    "package-lock*"
  ]
}
```
###### Step 4.
Activate the package and enjoy the features 😸

###### Current Setting Options Available:
- **ignore**
  - *Takes an Array of Strings*
   - If your familiar with .gitignore and how it handles ignoring specific patterns, then you can get going by using that knowledge here. Just imagine that each entry into the array is a line in the ignore file. To dive deeper into specifics check out [glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)).

## License
MIT License

Copyright (c) 2019 Michael Arakilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
