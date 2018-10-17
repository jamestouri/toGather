Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :groups, only: [:create, :index, :show, :destroy, :update]
    resources :join_groups, only: [:create, :destroy, :index, :show]
    resources :events, only: [:create, :index, :show, :destroy, :update]
    resources :rsvps, only: [:create, :destroy, :index, :show]

  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
