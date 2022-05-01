class InfoPolicy < ApplicationPolicy
  class Scope < Scope
    # scope.all
  end

  def edit?
    @user
  end

  def update?
    edit?
  end
end
