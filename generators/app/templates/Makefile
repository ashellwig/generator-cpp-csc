# vim: set ts=2 sw=2 ft=sh:
## Module TODO:MODNUM Chapter TODO:CHAPNUM Program
## Ashton S. Hellwig
## Date: TODO:DATE
## CSC160
##

# --- Variables ---
# Directories
SRC = src
TGT = obj
INCLUDES = -Iinclude
DBGOUT = target/debug
RELOUT = target/release
UDOCDIR = doc/assigned
# Compiler
CXX = clang++
CXXFLAGSREL = -Weverything -std=c++17 -O2 $(INCLUDES)
CXXFLAGSDBG = -Weverything -std=c++17 -g -glldb $(INCLUDES)
SOURCES = $(wildcard $(SRC)/*.cpp)
DBGOBJS = $(addprefix $(TGT)/debug/, $(notdir $(SOURCES:.cpp=.o)))
RELOBJS = $(addprefix $(TGT)/release/, $(notdir $(SOURCES:.cpp=.o)))

# --- Rules ---

# All
## Build
all: debug user-doc-build release
## Removes object files
clean-all-obj: clean-dbg clean-rel
## Removes object files and binaries
clean-all: clean-all-dbg clean-all-rel user-doc-clean-all


# Doc
## Assigned
### Clean
user-doc-clean:
	rm -rf \
	$(UDOCDIR)/*.aux $(UDOCDIR)/*.bbl $(UDOCDIR)/*.blg $(UDOCDIR)/*.idx \
	$(UDOCDIR)/*.ind $(UDOCDIR)/*.lof $(UDOCDIR)/*.lot $(UDOCDIR)/*.out \
	$(UDOCDIR)/*.toc $(UDOCDIR)/*.acn $(UDOCDIR)/*.acr $(UDOCDIR)/*.alg \
	$(UDOCDIR)/*.glg $(UDOCDIR)/*.glo $(UDOCDIR)/*.gls $(UDOCDIR)/*.ist \
	$(UDOCDIR)/*.fls $(UDOCDIR)/*.log $(UDOCDIR)/*.fdblatexmk \
	$(UDOCDIR)/*.fdb_latexmk $(UDOCDIR)/*.synctex.gz
user-doc-clean-all: user-doc-clean
	$(user-doc-clean)
	rm -rf $(UDOCDIR)/*.pdf
### Build
user-doc-build: $(UDOCDIR)/%.tex
$(UDOCDIR)/%.tex: user-doc-clean
	$(user-doc-clean)
	cd $(UDOCDIR)
	latexmk -synctex=1 -interaction=nonstopmode -file-line-error \
	-jobname=$(UDOCDIR)/userdocs -pdf $(UDOCDIR)/userdocs.tex
	cd -


# Debug
## Run
run-debug:
	$(DBGOUT)/ChapterTODO:CHAPNUM-Debug.bin
## Build
debug: $(TGT)/debug/ChapterTODO:CHAPNUM-DBG
$(TGT)/debug/%.o: $(SRC)/%.cpp
	$(CXX) $(CXXFLAGSDBG) -c $< -o $@
$(TGT)/debug/ChapterTODO:CHAPNUM-DBG: $(DBGOBJS)
	$(CXX) $(LDFLAGS) $(DBGOBJS) -o $(DBGOUT)/ChapterTODO:CHAPNUM-Debug.bin
## Removes Object Files
clean-dbg:
	rm -rf $(TGT)/debug/*.o
## Removes binaries and object files for debugging builds
clean-all-dbg:
	rm -rf $(TGT)/debug/*.o $(DBGOUT)/*.bin


# Release
## Run
run-release:
	$(RELOUT)/ChapterTODO:CHAPNUM-Release.bin
## Build
release: $(TGT)/release/ChapterTODO:CHAPNUM-REL
$(TGT)/release/%.o: $(SRC)/%.cpp
	$(CXX) $(CXXFLAGSREL) -c $< -o $@
$(TGT)/release/ChapterTODO:CHAPNUM-REL: $(RELOBJS)
	$(CXX) $(LDFLAGS) $(RELOBJS) -o $(RELOUT)/ChapterTODO:CHAPNUM-Release.bin
	cp $(UDOCDIR)/userdocs.pdf $(RELOUT)/userdocs.pdf
## Removes object files
clean-rel:
	rm -rf $(TGT)/release/*.o
## Removes binaries and object files for release builds
clean-all-rel:
	rm -rf $(TGT)/release/*.o $(RELOUT)/*.bin $(RELOUT)/*.pdf
