# qutebrowser is awesome

Best way to open qutebrowser via dmenu: `qu` works excellent!

My config file for qutebrowser: https://github.com/sahilrajput03/config/tree/main/.config/qutebrowser

Source (youtube@distrotube): https://youtu.be/_OJKp4c5OLs

Source2 (youtube@distrotube): https://www.youtube.com/watch?v=rMYMfnOpxP0

- **quickmarks**:

  FYI: To add a quickmark type command `:quick` and you'll see below list of commands in suggestions:

  **ALERT: Don't modify the ~/.config/qutebrowser/quickmarks file directly**, coz there's no way of loading that file again in running instace of qutebrowser, **so its better to use qutebrowser itself commands below defined to add/delete any quickmarks.**
  **ALERT:FYI: If you edit the file if you really want to then you can simply close the browser and open it again so it picks up the changes made in file. (also, `config-source` doesn't seem to help with this too).**

  ```
  quickmark-add #To add a new quickmark
  quickmark-del # To delete a quickmark
  quickmark-load name_of_quickmark # To load a quickmark (you can open it in current tab/new tab/new window as well).
  quickmark-save # Save the current page as a quickmark.

  # See complete list of all the commands available from qutebrowser @ 
  # https://qutebrowser.org/doc/help/commands.html
  ```

*qutebrowser has 23k commits, wow!*

Amazing course for learnig qutebrowser @ https://www.shortcutfoo.com/app/dojos/qutebrowser

You can open Help page in qutebrowser directly via: `:help` command and
that'll open the help page from qutebrowser's site.

(Found in help page) Commands page: https://qutebrowser.org/doc/help/commands.html

Help page: https://qutebrowser.org/doc/help/

Quick Start: https://qutebrowser.org/doc/quickstart.html

Read here: https://wiki.archlinux.org/title/Qutebrowser

## Configuring via files ?

~Sahil: Please read @ 

- qute://help/configuring.html  (This works in qutebrowser only)
- https://qutebrowser.org/doc/help/configuring.html

## Set search engines: 

 Src: https://www.reddit.com/r/qutebrowser/comments/72tm8g/adding_search_engines/

 Use below command to set default and other search engines, default new
 tab, start_pages, and more.

:set url.searchengines '{"aur" : "https://aur.archlinux.org/packages?O=0&K={}", "ap": "https://archlinux.org/packages/?q={}", "us": "https://unsplash.com/s/photos/{}", "r": "https://reddit.com/r/{}", "ud": "https://www.urbandictionary.com/define.php?term={}", "aw": "wiki.archlinux.org/?search={}", "y": "https://www.youtube.com/results?search_query={}", "DEFAULT": "https://www.google.com.ar/search?q={}", "d": "https://duckduckgo.com/?q={}"}'
:set url.default_page "https://google.in"
:set url.start_pages "https://google.in"

You can change these settings manually via below command as well.

:open qute://settings


## Shortcuts:

- f/F to get hintlink to open in current/new tab
- b/B to open a quickmark in current/new tab
- o/O to open a link in current/new tab
 
- +/-/= to zoom-in, zoom-out, 100% in normal mode [Src](https://qutebrowser.org/doc/help/commands.html)
- shift+b to open quickmarks menu
- shift+j/k to switch to tabs down/up
- gD to detach current tab and open in new window
- d in normal mode to close current tab
- u to open recently closed tab
- f to mark link with navigate to those links
- pp to open url from clipboard
- shift+h/l to navigate in tab history
- ctrl-h to go to default_page(say home page)
- ga in normal mode opens a new tab
- You get a list of shortcuts via g and y (you need to wait for 2 seconds)
- ga to open new tab
- Alt+1,2.., to open tab 1, 2,.. and so on..
- ctrl+g g in normal mode will open shortcuts
- :open qute://settings to edit more settings
