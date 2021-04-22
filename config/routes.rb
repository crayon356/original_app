Rails.application.routes.draw do
  root to: 'statuses#index'
  resources :statuses, only: [:create]
end
