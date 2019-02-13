import base64
import json
import os

image_data = {}


image_files = os.listdir('img')
for img in image_files:
	if img.endswith('.jpg'):
		with open('img/' + img, 'rb') as f:
			data = f.read()
			image_data[img[:-4]] = data.encode("base64")[:-2]
	
if os.path.exists('img_data.json'):
	os.remove('img_data.json')
with open('img_data.json', 'w+') as outfile:
	json.dump(image_data, outfile)