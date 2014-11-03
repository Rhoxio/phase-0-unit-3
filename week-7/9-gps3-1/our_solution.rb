# U3.W7: Build an Electronic Grocery List! (in Ruby)

# Your full names:
# 1. Kevin Maze
# 2. Stephen Clem

# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to take user input.
# As a user, I want to add items to a list
# As a user, I want to remove items from the list
# As a user, I want to count the items on the list
# As a user, I want to delete the list

# Pseudocode
# Create a class for our gorcery list
# make methods for each function
# create a second class for our items
# take the input of the user using gets.chomp


# Your fabulous code goes here....

class Item
attr_reader :type
  def initialize(type)
    @type = type
  end
end

class List

  def initialize
    @final_list = []
  end

  def add_item
    while true
      vari = gets.chomp
      if vari == "end"
        print_list
        break
      end
      item = Item.new(vari)
      @final_list << item
    end
  end

  def remove_item(item)
    puts "You removed #{item}."
    @final_list.delete_if {|x| x.type == item}
  end

  def count
    puts "You have #{@final_list.count} items on your list!"
  end

  def print_list
    puts "Your final list is:"
    @final_list.each {|item| puts item.type}
  end

  def clear
    puts "Your list has been cleared..........."
    @final_list.clear
  end

end

# DRIVER CODE GOES HERE.

test = List.new

test.add_item

test.print_list

test.remove_item("dog")

test.print_list

test.clear

puts "*************"

test.print_list


