# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


skintones = []
skintones << Skintone.create(color: "Light")
skintones << Skintone.create(color: "Fair")
skintones << Skintone.create(color: "Medium")
skintones << Skintone.create(color: "Olive")
skintones << Skintone.create(color: "Brown")
skintones << Skintone.create(color: "Black")

eyecolors = []
eyecolors << Eyecolor.create(color: "Blue")
eyecolors << Eyecolor.create(color: "Green")
eyecolors << Eyecolor.create(color: "Hazel")
eyecolors << Eyecolor.create(color: "Brown")