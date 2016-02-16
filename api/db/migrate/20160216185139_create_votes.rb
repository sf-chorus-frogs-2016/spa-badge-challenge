class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :badge
      t.integer :points, :default => 0

      t.timestamps :null => false
    end
  end
end
