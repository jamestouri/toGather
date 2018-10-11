class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.text :about, null: false
      t.string :category, null: false
      t.integer :user_id, null: false
      t.timestamp
    end

    add_index :groups, :category
    add_index :groups, :title
  end
end
