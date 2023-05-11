shopt -s extglob
find ./student -name "*.js" -not -name "final-grtown.js" -print0 | xargs -0 rm -rf
shopt -u extglob