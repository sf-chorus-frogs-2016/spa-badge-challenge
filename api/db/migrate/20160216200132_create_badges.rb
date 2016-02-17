class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.belongs_to :member, index: true
      t.string :title
      t.integer :points, default: 0

      t.timestamps null: false
    end
  end
end
