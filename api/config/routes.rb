Rails.application.routes.draw do
  # root 'cohorts#index'

  resources :students, except: [:new, :edit] do
    resources :badges, except: [:new, :edit]
  end

end
