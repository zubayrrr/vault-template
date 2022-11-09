# Config
git_output="/home/igloo/vault-template/output"
obsidian_folder="/home/igloo/vault-template/vault"
root_folder="/home/igloo/vault-template/"

# Move to output folder and make sure it is up to date
cd $git_output
git pull

# Remove all files except .git/ and README.md
echo "Will delete previous output:"
find . ! -path "./.git/*" ! -name ".git" ! -name README.md
echo "Continue? (y/n)"
read yn

if [ "$yn" != "y" ]; then
    echo "Aborted"
    exit 0
fi

find . ! -path "./.git/*" ! -name ".git" ! -name README.md -delete


# Convert Obsidian to HTML
cd $root_folder
obsidianhtml -i ./config.yaml
# ^ the config file will output the html to $git_output

if [ $? -ne 0 ]; then
    echo "Python script failed. Exited."
    exit 1
else
    echo "Successfully created html code"
fi

# Push changes
cd $git_output
mv html/* ./
rm -rf html/

# git add . --all
# git commit -m "autopush"
# git push -f
