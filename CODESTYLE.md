# Code Style Convention
_Please try to keep lines at a maximum of 60 characters._

_Favor clarity over brevity in naming anything._
## Directories
```
root
    // Package config
    .next
    node_modules
    // React components
    components // Reusable pure components
    areas // A groups of components that are independent parts of the page
    layout // Reusable layout template
    pages
    // Style sheets
    styles
        _ // Mixins and variables
    // Assets
    public // Public assets
```
## Tsx components
- The file name may begin with the prefix and should end with the extension tsx.
- The function name matches with filename.
- Default exports is placed at the end of the file.
- Component is a named function without type definition.
- Props type is defined in an `I_Props` interface.
- Styles should be imported as `styles` and then re-declared using destructuring
- Component shouldn't have subdirectories for nested components.
```
import styles from '../styles/Component.module.sass'
const { stBlock, stBlock_element } = styles

function Block({}: I_Props){
    return(
        <div className={stBlock}>
            <div className={stBlock_element}></div>
        </div>
    )
}
```
## Component
- The file name begins with the prefix Co and ends with the extension tsx.
## Area
- The file name begins with the prefix Ar and ends with the extension tsx.
## Layouts
- The file name begins with the prefix La and ends with the extension tsx.
## Pages
- The file name begins without any prefix and ends with the extension tsx.
- The file is named according to the NextJS code style guide.
- The name of the component function begins with a capital letter.
## Styles
- The file name begins with the block name and ends with the extension module.sass .
- The BEM methodology is used.
- Files with exported variables and mixins start with the prefix _ and are located in the subdirectory `_`.
- Variables and mixins uses camelCase.
- Block name begins with st- prefix.
- Block name uses camelCase.
- All stylesheets are located in the `styles` directory.
```
    stBlock
        stBlock__element
        stBlock__element__modificator

```
