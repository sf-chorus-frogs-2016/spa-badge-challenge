Rails.application.routes.draw do
  resources :students, except: [:new, :edit]
end
