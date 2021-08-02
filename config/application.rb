require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FundacionProlongar
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.active_record.belongs_to_required_by_default = true
    config.load_defaults 5.2

    config.time_zone = 'America/New_York'
    config.encoding = "utf-8"
    config.active_record.default_timezone = :local
    config.cache_store = :null_store
    config.active_record.time_zone_aware_types = [:datetime, :time]
  	config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end
    # config.force_ssl = true
    # config.ssl_options = {  redirect: { status: 307, port: 81 } }
    # config.ssl_options = { hsts: { preload: true } }
    # config.ssl_options = { hsts: { expires: 10.days } }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
