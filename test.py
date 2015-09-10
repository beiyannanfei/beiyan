import os

print("********* test begin *************");
aa = {"aaa": 10, "bbb": 20};

bb = {"bbb": 20, "aaa": 10};
print("aa = %s, bb = %s" % (aa, bb));
print(aa == bb)


print("********* test end *************");
os.system("pause");

'''
fridge = {'apples': 10, 'oranges': 3, 'milk': 2}
wanted_food = 'apples'
def in_fridge():
    """this is a function to see if the fridge has a food.
    fridge has to be a dictionary defined outside of the function.
    the food to be searched for is in the string wanted_food"""
    try :
        count = fridge[wanted_food]
    except KeyError:
        count = 0
    return count
'''
'''
def in_fridge(some_fridge, desired_item) :
    """this is a function to see if the fridge has a food.
    fridge has to be a dictionary defined outside of the function.
    the food to be searched for is in the string wanted_food"""
    try:
        count = some_fridge[desired_item]
    except KeyError:
        count = 0
    return count
'''
'''
def make_omelet(omelet_type) :
    """this will make an omelet. You can either pass in a dictionary
    that contians all of the ingredients for you omelet,or provide
    a string to select a type of omelet this function already knows
    about"""
    if type(omelet_type) == type({}) :
        print("omelet_type is a dictionary with ingredients")
        return make_food(omelet_type, "omelet")
    elif type(omelet_type) == type("") :
        omelet_ingredients = get_omelet_ingredients(omelet_type)
        return make_food(omelet_ingredients, omelet_type)
    else :
        #print("I don't think I can make this kind of omelet: %s" % omelet_type)
        raise TypeError("No such omelet type: %s" % omelet_type)


def get_omelet_ingredients(omelet_name) :
    """This contains a dictionary of omelet names that can be produced,
    and their ingredients"""
    #all of our omelet need eggs and milk
    ingredients = {"eggs":2, "milk": 1}
    if omelet_name == "cheese" :
        ingredients["cheddar"] = 2
    elif omelet_name == "western" :
        ingredients["jack_cheese"] = 2
        ingredients["ham"] = 1
        ingredients["pepper"] = 1
        ingredients["onion"] = 1
    elif omelet_name == "greek" :
        ingredients["feta_cheese"] = 2
        ingredients["spinach"] = 2
    else :
        print("that is not on the menu, sorry!")
        return None
    return ingredients

def make_food(ingredients_needed, food_name) :
    """make_food(ingredients_needed, food_name)
    takes the ingredients from ingredients_needed and makes food_name"""
    for ingredient in ingredients_needed.keys() :
        print("Adding %d of %s to make a %s" % (ingredients_needed[ingredient], ingredient, food_name))
    print("Make %s" % food_name)
    return food_name
'''

'''
def do_plus(num1, num2) :
    return num1 + num2
'''

'''
def agrs_check(args) :
    if str(type(args)) == "<type 'str'>" :
        print("the args type is str")
    else :
        raise TypeError("the args type is not str, is %s", str(type(args)))
'''
'''
class Fridge :
    def __init__(self, items={}) :
        if type(items) != type({}) :
            raise TypeError("Fridge requires a dictionary but was given %s" % type(items))
        self.items = items
        return

    def __add_multi(self, food_name, quantity) :
        if (not food_name in self.items ) :
            self.items[food_name] = 0

        self.items[food_name] = self.items[food_name] + quantity

    def add_one(self, food_name) :
        if type(food_name) != type("") :
            raise TypeError, "add_one requires a string,given a %s" % type(food_name)
        else :
            self.__add_multi(food_name, 1)
        return True

    def add_many(self, food_dict) :
        if(type(food_dict) != type({})) :
            raise TypeError("add_many requires a dictionary, got a %s" % food_dict)

        for item in food_dict.keys() :
            self.__add_multi(item, food_dict[item])
        return

    def has(self, food_name, quantity = 1) :
        return self.has_various({food_name: quantity})

    def has_various(self, foods) :
        try :
            for food in foods.keys() :
                if self.items[food] < foods[food] :
                    return False
            return True
        except KeyError :
            return False

    def __get_multi(self, food_name, quantity) :
        try :
            if (self.items[food_name] is None) :
                return False;

            if (quantity > self.items[food_name]) :
                return False;

            self.items[food_name] = self.items[food_name] - quantity
        except KeyError :
            return False
        return quantity

    def get_one(self, food_name) :
        if type(food_name) != type("") :
            raise TypeError("get_one requires a string, giving a %s" % type(food_name))
        else :
            result = self.__get_multi(food_name, 1)
        return result

    def get_many(self, food_dict) :
'''        
            












