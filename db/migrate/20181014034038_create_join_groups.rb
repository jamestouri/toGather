class CreateJoinGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :join_groups do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false

      t.timestamp
    end
    add_index :join_groups, :user_id
    add_index :join_groups, :group_id
    add_index :join_groups, [:user_id, :group_id], unique: true 
  end
end
