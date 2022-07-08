if Rails.env.test?
  REDIS = mockRedis.new
else
  REDIS = Redis.new(url: Settings.session.url)
end