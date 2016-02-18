Rails.application.routes.draw do
  resources :students, except: [:new, :edit] do
    resources :badges, except: [:new, :edit]
  end
end
