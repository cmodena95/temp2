class InfosController < ApplicationController
  before_action :check_user, only: [:update]

  def update
    @info = Info.find(1)
    authorize @info
    if @info.update(info_params)
      redirect_to root_path
    else
      render :home
    end
  end

  private

  def info_params
    params.require(:info).permit(:header, :subheader, :title, :description, :phone, :email, :location)
  end

  def check_user
    raise ActionController::RoutingError.new('Not Found') unless user_signed_in?
  end
end
