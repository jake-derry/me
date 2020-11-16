---
title: "Two lessons I learned from becoming a magician"
published: true
preview: "Building a compiler changed my understanding of computers because now
          I've seen most of what's behind the curtain."
date: "May 15, 2020"
---

During this unpredictable time, what remained consistent through the shift to
remote classes was my semester projects. In addition to the 
[mobile application](https://github.com/jake-derry/coronavirus-tracker) that I
developed with a couple other computer science students and the education
curriculum that I developed with a team of neuroscience students, I worked on
one of the most difficult and rewarding projects that I have been a part of:
developing a [compiler](https://github.com/vasilescur/ambush).

Now, I have always believed that computers have some element of magic to
them, some deception or dishonesty that keeps the user from fully knowing what
is going on inside the metal. Once you create a compiler, that magic fades away.
You are the magician. You take something that is deceptively simple but not
trivial like

```sml
let
    type link = {val:list}
    type list = {val:int, link:link}
    function printList (l : list) = (printInt (l.val); if l.link <> nil then printList (l.link))
    var li = list {val=2, link=link {val=list {val=3, link=nil}}}
in printList li
end
```

and turn it into something unreadable (i.e. MIPS assembly). What makes it magical
is that the unreadable nonsense creates a result. When my collaborator ([Radu Vasilescu](https://github.com/vasilescur)) and I finally finished with our register
allocator, we could, after two months of working, see if the unreadable nonsense
that it outputted was functional. 

After handling some bugs, we officially became magicians. Learning how to perform magic taught me two valuable lessons.

### 1. Functional programming is beautifully simple

While compilers can be written in [object-oriented languages](../object-oriented),
compiler construction at Duke is taught in SML/NJ which is a functional
programming language. At the time, I had never written code in a functional
programming language, so it was a difficult paradigm shift. I have [fallen in
love with many languages](../object-oriented), and SML/NJ is among those that I
have fallen in love with. Where object-oriented languages are beautifully
organized, centered around something that I can understand, objects, SML/NJ is
uniquely elegant.

When we finished our compiler, I was shocked that we had only written a total
of around 6000 lines of code. We had worked on this project for three months!
The reason is because SML/NJ is elegant, beautifully simple. Where well-written
Java may call for multiple subclasses to be written or an enumerated type,
SML/NJ required only a couple lines to define a datatype.

Transitioning to SML/NJ for this project enabled me to develop code in a
completely different way than I have before.

### 2. The software engineer's slight-of-hand is creating layers of indirection

The professor of compiler construction [Andrew Hilton](https://ece.duke.edu/faculty/andrew-hilton) 
throughout the class used the analogy of compiler's mountain to describe how code 
is compiled. There are two sides to the mountain, one which should depend on the language, and one which should depend on the instruction set. He uses this
analogy to show that the compiler is broken down into layers. 

- First, you translate characters into tokens (lexing)
- You make a tree with those tokens (parsing) 
- You check if that tree will actually work (semantic analysis) 
- You turn the tree into instruction set independent instructions (intermediate
representation)
- You choose instruction set instructions from the intermediate representation 
(instruction selection)
- You choose the registers that variables will use (register allocation)

Once you break compilation into layers, it becomes less complex which makes
sense. "Introducing an extra layer of indirection" is the solution suggested
by the fundamental theorem of software engineering. Adding layers was how
the founders of the Internet handled the complexity of networking. Likewise, the
process of writing a compiler provides another example of how indirection makes 
impossible problems the manageable work that software engineers can use for
slight-of-hand.

Like a child who's parents told them that Santa doesn't exist, I can't say that
I will see computers the same way again. Where computers used to magically give
me the answer I wanted, I now know how the magic trick works. What I take away
from this is the tricks that I have learned, or rather the essential trick,
levels of indirection which can even be introduced in a functional paradigm.
Who knew.
