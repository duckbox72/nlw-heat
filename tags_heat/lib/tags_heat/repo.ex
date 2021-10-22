defmodule TagsHeat.Repo do
  use Ecto.Repo,
    otp_app: :tags_heat,
    adapter: Ecto.Adapters.Postgres
end
