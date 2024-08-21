source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.2'

gem 'rails', '~> 6.1.5', '>= 6.1.5.1'
gem 'bootstrap-sass', '3.3.7'
gem 'sqlite3', '~> 1.4'
gem 'puma', '~> 5.0'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'bcrypt',         '3.1.11'
gem 'faker', '~> 2.20'
gem 'will_paginate', '~> 3.3.1'
gem 'bootstrap-will_paginate', '1.0.0'
gem 'carrierwave', '~> 2.0'
gem 'mini_magick', '~> 4.11'
gem 'fog-aws', '~> 3.6'

gem 'bootsnap', '>= 1.4.4', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 4.1.0'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  gem 'spring'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver', '>= 4.0.0.rc1'
  gem 'rails-controller-testing', '1.0.5'
  gem 'webdrivers'
  gem 'guard',                    '2.13.0'
  gem 'guard-minitest','2.4.4'
end

group :production do
  gem 'pg', '0.18.4'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
