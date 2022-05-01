class Info < ApplicationRecord
  validates :header, :subheader, :title, :description, :phone, :email, :location, presence: true
end
