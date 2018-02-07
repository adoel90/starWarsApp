Feature: Create Koleksi Buku
	
Scenario: Create koleksi buku

	Given button "tambah koleksi" di pencet

	When button di klik

	Then Muncul form modal pop up 

	And muncul list form yang harus di isi

	When selesai isi form kemudian klik button "insert"

	Then data berhasil di input ke mongodb
