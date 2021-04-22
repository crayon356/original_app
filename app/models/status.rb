class Status < ApplicationRecord
  with_options presence: true do
    validates :height, format: { with: /\A[0-9]+\z/ }
    validates :weight, format: { with: /\A[0-9]+\z/ }
    validates :BMI
  end
  has_one :user
end
