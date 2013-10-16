f = open('password.csv','r')
p = {}
for line in f:
	l = line.split(',')
	f[l[0]] = l[1]

print p



