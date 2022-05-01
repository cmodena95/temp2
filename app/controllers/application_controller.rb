class ApplicationController < ActionController::Base
  include Pundit

  $phone = Info.find(5)
  $email = Info.find(6)
  $location = Info.find(7)
end
