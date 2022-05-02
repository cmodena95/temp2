class Info < ApplicationRecord
  has_rich_text :description
  validates :header, :subheader, :title, :phone, :email, :location, presence: true
end
