class StudentsController < ApplicationController
  def index
  end

  def show
    @studentId = params[:id]
  end

end
