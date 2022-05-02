class ApplicationController < ActionController::Base
  include Pundit

  @info = Info.find(1)
end
