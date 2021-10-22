defmodule TagsHeatWeb.MessagesController do
  use TagsHeatWeb, :controller

  def create(conn, params) do
    IO.inspect(params)

    text(conn, "REQUEST RECEIVED")
  end
end
