#!/usr/bin/env bash
# rm -rfv ./dist
npx ng build --prod --aot
aws --profile paulbaker s3 sync ./dist/korey-wilson-memorial-app/ s3://koreywilson.life/ --acl public-read