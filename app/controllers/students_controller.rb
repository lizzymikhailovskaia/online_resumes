class StudentsController < ApplicationController
  def index
  end

  def show
    render "show.html.erb"
  end

  def api
    render "students.json"

  end
end
