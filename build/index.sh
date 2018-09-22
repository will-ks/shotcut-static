#!/bin/sh
set +e
cd $(dirname $0)

tar_exec=$(command -v gtar)
if [ $? -ne 0 ]; then
	tar_exec=$(command -v tar)
fi

download () {
	curl -L -# -A 'https://github.com/dambusm/shotcut-static' -o $2 $1
}

RELEASE=$(curl -s https://api.github.com/repos/mltframework/shotcut/releases | grep browser_download_url | grep '[.]bz2' | head -n 1 | cut -d '"' -f 4)
echo 'linux x64'
echo $RELEASE
echo '  downloading'
download $RELEASE linux-x64.tar.bz2
echo '  extracting'
$tar_exec -xvj -C ../bin/linux/x64  -f linux-x64.tar.bz2 --strip-components 2

# npm does not include symlinks in packages (https://github.com/npm/npm/issues/13050).
# This workaround replaces symlinks with copies of the originals. 
cd ../bin/linux/x64/lib
for f in $(find . -maxdepth 1 -type l)
do
    cp --remove-destination $(readlink -e $f) $f
done