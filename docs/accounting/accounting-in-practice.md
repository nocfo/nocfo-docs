# Kirjanpito käytännössä

MAKSUPERUSTEISESTI tilikauden aikana sitten suoritusperusteisesti

## Step 1: Rahaliikenteen raportti

Before you start designing your doc, identify its purpose, and think about its content—including how you’d like people to interact with the information.

## Step 2: Tapahtumien kirjaus

One Big Table schema a single table that houses all of the data in your doc and is ideal for:

- Small projects
- Small teams
- Getting started quickly
- Narrowly-focused information tracking

## Step 3: Välicheckit

Star schema uses lookups to create a series of connected tables and is ideal for:

- Larger scale projects or initiatives
- You want consistency.
- You want to reference the same data in multiple places.
- Your data has 1 to 1 relationships.

## Step 4: Raportit ja raportointi

Base/detail schema includes a summary table (base) populated by a larger dataset (detail). Use this schema if:

- You have a large dataset.
- You need to answer specific questions with that data in a summary or dashboard experience.

## Step 5: Tilinpäätöskirjaukset

With the multidimensional schema, many tables (large and small) that are interconnected via lookups and formulas. No one table acts as the base or overview. Use if:

- You have a large dataset and there's no clear hierarchy among your tables.
- You have a lot of different questions you need to answer with your data.
- Your data has many to many relationships.

## Step 6: Tilikauden sulkeminen ja viimeistely

How do you know if you have the right schema? It may be time to change your schema if:

- You’re making too many updates.
- You have something new to add but nowhere to put it.
- You’re unable to have a blank cell in your table.
