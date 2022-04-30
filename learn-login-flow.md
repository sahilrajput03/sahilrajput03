# Login and Signup processes

**Below flowchart shows login process-**

```mermaid
graph TD
    A((CLIENT)) -->|username:password| B((SERVER))
    B --> |"hashFn(passwd)"| C(passwdHash)
    C --> |"Server fetches passwdHashFromDb"| Z{Is passwdHash = passwdHashFromDb ?}
    Z --> |"No"| M(Illegal passwd from user)
    M --> |LOGIN FAILED| A
    Z --> |Yes| D(Valid passwd)
    D --> |"jwtSign(username)"| E(Token) --> |LOGIN SUCCESSFUL| A
    style M fill:#ff4f4d
    style E fill:#33ff33
    linkStyle 0,1,2 stroke:yellow,stroke-width:3px,color:yellow;
    linkStyle 3,4 stroke:red,stroke-width:3px,color:red;
    linkStyle 5,6,7 stroke:green,stroke-width:3px,color:green;
    
    %% Comments: In above code, the numbers after lineStyle is actually the line numbers of each line in same above code ( starts from 0). 
```

*FYI: You can view the code of above diagram by clicking on the "Raw" button above.*

## Using mermaid
- Flow chart docs: https://mermaid-js.github.io/mermaid/#/flowchart
- Mermaid is supported in github, yo!
- Mermaid Docs: [https://mermaid-js.github.io/mermaid/#/](https://mermaid-js.github.io/mermaid/#/)
- **Live Mermaid:** [https://mermaid.live/](https://mermaid.live/)
- Mermaid is supported at markdown files in github (not in github pages yet) and gist also supports mermaid as well.

Here is a simple flow chart:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```
