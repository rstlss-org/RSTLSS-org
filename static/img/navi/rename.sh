for file in *.mov
do
  echo mv "$file" "${file/MP4./}"
done