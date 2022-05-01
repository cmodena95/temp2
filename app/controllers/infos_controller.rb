class InfosController < ApplicationController
  before_action :check_user, only: [:update]

  def update

  end

  private


  def check_user
    raise ActionController::RoutingError.new('Not Found') unless user_signed_in?
  end
end
