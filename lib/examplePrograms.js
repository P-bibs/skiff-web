export default {
    "Language Tour": `# We can define ADTs with the \`data\` keyword.
data Option:
    | some(v)
    | none()
end

# A simple linked list with a first item and a rest.
data List:
    | link(f, r)
    | empty()
end

# A binary tree node with optional type annotations
data Tree:
    | node(v: Number, l: Tree, r: Tree)
    | leaf()
end

# Higher order functions are supported, so we can define a \`map\` function that
# takes a function and a list and applies the function to each element of the list
def map(func, l):
    match l:
        | link(f,r) => link(func(f), map(func, r))
        | empty() => empty()
    end
end

# We define \`filter\` similar to \`map\` by using pattern matching and recursion.
# We can also supply optional type annotations.
def filter(func: Number -> Boolean, l: List) -> List:
    match l:
        | link(f,r) => if func(f):
                link(f, filter(func, r))
            else:
                filter(func, r)
            end
        | empty() => empty()
    end
end

def fold(func, l, default):
    match l:
        | link(f,r) => func(f, fold(func, r, default))
        | empty() => default
    end
end

# type annotation could be omitted
let list: List = link(1, link(2, link(3, link(4, empty()))))

map(lambda(x): x + 1 end, list)

filter(lambda(x): x == 2 end, list)

fold(lambda(n,a): n + a end, list, 0)
`,
    "Mutual Recursion": `# Function declarations are hoisted, so we can write even and odd
# as mutually recursive functions
def even(n: Number) -> Boolean:
    match n:
        | 0 => true
        | n => odd(n - 1)
    end
end

# the type annotations are optional, so we can omit them on odd
def odd(n):
    match n:
        | 0 => false
        | n => even(n - 1)
    end
end

even(6) # true
odd(7)  # true
odd(8)  # false
even(9) # false
`,
    "Exhaustiveness Checking": `data List:
    | link(f,r)
    | empty()
end


# Skiff performs static analysis and gives the user a warning that
# the following match statement is not exhaustive (link isn't matched)
let e = empty()
match e:
    | empty() => 1
end
`
}