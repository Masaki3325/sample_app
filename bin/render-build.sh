#!/usr/bin/env bash
# exit on error
set -o errexit

rm -rf node_modules                                                                                                                                           9s Py base 17:43:37
yarn install
bundle install

bundle exec rails assets:precompile
bundle exec rake assets:clean

bundle exec rake db:migrate
