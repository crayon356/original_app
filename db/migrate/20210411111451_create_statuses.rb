class CreateStatuses < ActiveRecord::Migration[6.0]
  def change
    create_table :statuses do |t|
      t.integer :height,    null: false
      t.integer :weight,    null: false
      t.integer :BMI,       null: false
      #t.references :user
      t.timestamps
    end
  end
end
