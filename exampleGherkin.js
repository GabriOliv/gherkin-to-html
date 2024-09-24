let exampleGherkin = `
# ==============================================================

# language: en
Feature: Multiple site support
	Only blog owners can post to a blog, except administrators,
	who can post to all blogs.

	Background:
		Given a global administrator named "Greg"
		And a blog named "Greg's anti-tax rants"
		And a customer named "Dr. Bill"
		And a blog named "Expensive Therapy" owned by "Dr. Bill"

	Scenario: Dr. Bill posts to his own blog
		Given I am logged in as Dr. Bill
		When I try to post to "Expensive Therapy"
		Then I should see "Your article was published."

	Scenario: Dr. Bill tries to post to somebody else's blog, and fails
		Given I am logged in as Dr. Bill
		When I try to post to "Greg's anti-tax rants"
		Then I should see "Hey! That's not your blog!"

	Scenario: Greg posts to a client's blog
		Given I am logged in as Greg
		When I try to post to "Expensive Therapy"
		Then I should see "Your article was published."

# ==============================================================

# language: pt
Funcionalidade: Algum texto descritivo conciso do que é desejado
	A fim de realizar um valor de negócio
	Como ator explicito do sistema

	Contexto: Texto adicional...

	Cenário: Uma determinada situação de negócios
		Dada uma pré condição
		Quando uma ação é feita pelo ator
		Então um resultado testável é alcançado
		E outra ação a favor acontece
		* outra ação a favor acontece
		* outra ação a favor acontece
		Mas uma ação contrária acontece

# Comentário sobre o Segundo Cenário

	Cenário: Uma situação diferente
		Dado que o log está ativado
		* E o usuário está logado
		* E o usuário está em um página específica
		Quando uma ação é feita pelo ator
		Então um resultado testável é alcançado
		E outra ação a favor acontece
		Mas uma ação contrária acontece
		
# ==============================================================`;