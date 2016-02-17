Rails.application.routes.draw do
  # root 'cohorts#index'

  resources :students, except: [:new, :edit]
  resources :badges, except: [:new, :edit]

end
