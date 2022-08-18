
# [Gherkin to HTML](https://github.com/GabriOliv/gherkin-to-html)

Generator of HTML with Gherkin code highlighted. Useful for blog posts, or forum comments. Supports pt-BR and en-US language.

---

- Using Bootstrap;
- Languages tested: en-US, pt-BR;
- Highlights:
  - Language Line:
    - `# language: en`
  - Param Keywords:
    - `Feature:`
    - `Funcionalidade:`
    - `Background:`
    - `Contexto:`
    - ...
  - Action Keywords:
    - `Given`
    - `Dado`
    - `When`
    - `Quando`
    - ...

---

## Example

### Gherkin (before) 

```
Feature: Overdue tasks - Let users know when tasks are overdue, even when using other features of the app
	
	Rule: Users are notified about overdue tasks on first use of the day
	
	Background:
		Given I have overdue tasks
	
	Example: First use of the day
		Given I last used the app yesterday
		When I use the app
		Then I am notified about overdue tasks

	Example: Already used today
		Given I last used the app earlier today
		When I use the app
		Then I am not notified about overdue tasks
```

### HTML code (after)

```
<pre>Feature: <b><span style="color:#E90;white-space: pre-wrap;">Overdue tasks </span></b>- Let users know when tasks are overdue, even when using other features of the app
	<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Rule</span></b>:</span></b> <b><span style="color:#E90;white-space: pre-wrap;">Users are notified about overdue tasks on first use of the day</span></b>
	<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Background</span></b>:</span></b><b><span style="color:#2980b9;white-space: pre-wrap;">
		Given</span></b> I have overdue tasks
	<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Example</span></b>:</span></b> <b><span style="color:#E90;white-space: pre-wrap;">First use of the day</span></b><b><span style="color:#2980b9;white-space: pre-wrap;">
		Given</span></b> I last used the app yesterday<b><span style="color:#2980b9;white-space: pre-wrap;">
		When</span></b> I use the app<b><span style="color:#2980b9;white-space: pre-wrap;">
		Then</span></b> I am notified about overdue tasks
<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Example</span></b>:</span></b> <b><span style="color:#E90;white-space: pre-wrap;">Already used today</span></b><b><span style="color:#2980b9;white-space: pre-wrap;">
		Given</span></b> I last used the app earlier today<b><span style="color:#2980b9;white-space: pre-wrap;">
		When</span></b> I use the app<b><span style="color:#2980b9;white-space: pre-wrap;">
		Then</span></b> I am not notified about overdue tasks</pre>
```

### On page

<pre>Feature: <b><span style="color:#E90;white-space: pre-wrap;">Overdue tasks </span></b>- Let users know when tasks are overdue, even when using other features of the app
	<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Rule</span></b>:</span></b> <b><span style="color:#E90;white-space: pre-wrap;">Users are notified about overdue tasks on first use of the day</span></b>
	<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Background</span></b>:</span></b><b><span style="color:#2980b9;white-space: pre-wrap;">
		Given</span></b> I have overdue tasks
	<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Example</span></b>:</span></b> <b><span style="color:#E90;white-space: pre-wrap;">First use of the day</span></b><b><span style="color:#2980b9;white-space: pre-wrap;">
		Given</span></b> I last used the app yesterday<b><span style="color:#2980b9;white-space: pre-wrap;">
		When</span></b> I use the app<b><span style="color:#2980b9;white-space: pre-wrap;">
		Then</span></b> I am notified about overdue tasks
<b><span style="color:#2980b9;white-space: pre-wrap;"><b><span style="color:#2980b9;white-space: pre-wrap;">
	Example</span></b>:</span></b> <b><span style="color:#E90;white-space: pre-wrap;">Already used today</span></b><b><span style="color:#2980b9;white-space: pre-wrap;">
		Given</span></b> I last used the app earlier today<b><span style="color:#2980b9;white-space: pre-wrap;">
		When</span></b> I use the app<b><span style="color:#2980b9;white-space: pre-wrap;">
		Then</span></b> I am not notified about overdue tasks</pre>

---
