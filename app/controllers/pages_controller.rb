class PagesController < ApplicationController
  include Pundit
  after_action :verify_policy_scoped
  
  def home
    @properties = policy_scope(Property.all)

    @header = Info.find(1)
    @subheader = Info.find(2)
    @title = Info.find(3)
    @desc = Info.find(4)
  end

  def dashboard
    raise ActionController::RoutingError.new('Not Found') unless user_signed_in?
    @properties = policy_scope(Property.all)
  end
end
