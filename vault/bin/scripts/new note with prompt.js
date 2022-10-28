<%* 
var folderPathOrName = "000 Output"
//var folderPathOrName = "00 Internships/00 Internships/00 Internships" // Change this for your use
const files = this.app.vault.getAllLoadedFiles()
var folder, title

var folderPath = tp.obsidian.normalizePath(folderPathOrName)
files.forEach((file) => {
if (file.path == folderPath) {return folder=file};
if (file.name == folderPathOrName) {return folder=file};
console.log()
})
if (folder == undefined) {new Notice("can't find folder", 5000);} else {

const template = tp.file.find_tfile("100_Template_Knowledge")
const template_content = await this.app.vault.read(template)
//var title = await tp.system.prompt("Set FileName")

if (title = await tp.system.prompt("Set FileName")) {
var newfile = await this.app.vault.create(folder.path+ "/" + title + ".md", template_content)

const active_leaf = this.app.workspace.activeLeaf;
if (!active_leaf) {new Notice("No active leaf", 5000);} else {
await active_leaf.openFile(newfile, {state: { mode: "source" },});}
}}
%>